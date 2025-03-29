use dioxus::prelude::*;


#[derive(Debug, Clone, Routable, PartialEq)]
#[rustfmt::skip]
enum Route {
    // #[layout(Navbar)]
    #[route("/")]
    Home {},
    #[route("/Bricks")]
     BricksCalculation{},
}

const FAVICON: Asset = asset!("/assets/favicon.ico");
const MAIN_CSS: Asset = asset!("/assets/main.css");
const MANUE:Asset=asset!("/assets/manue.png");
// const HEADER_SVG: Asset = asset!("/assets/header.svg");

fn main() {
    dioxus::launch(App);
}

#[component]
fn App() -> Element {
    
    rsx! {
        document::Link { rel: "icon", href: FAVICON }
        document::Link { rel: "stylesheet", href: MAIN_CSS }
        Router::<Route> {}
    }
}

#[component]
fn Home()->Element{
    let is_open=use_signal(|| false);
    rsx!(
        Header { is_open: is_open.clone() }
        Welcome {}
        if is_open() {
            Side_bar {}
        }
    )
}

#[component]
fn Header(is_open: Signal<bool>) -> Element {
    rsx!(
        header {
            img {
                class: "img",
                src: "{MANUE}",
                alt: "Menu",
                onclick: move |_| is_open.set(!is_open()), // Toggle sidebar on click
            }
            Link { class: "home_link", to: Route::Home {},
                h1 { "Brico" }
            }
        }
    )
}


#[component]
fn Welcome() -> Element {
    rsx! {
        div { class: "welcome-container",
            h1 { class: "welcome", "Welcome to Brico! 🏗️" }
            p {
                "Brico is a smart and user-friendly construction calculator app designed to simplify all your construction-related calculations. 
                Whether you're a professional contractor or planning a home renovation, Brico helps you accurately estimate the required "
                strong { "cement, sand, bricks, concrete mixture, and more." }
            }
            h3 { "🧗 Key Features:" }
            ul {
                li { "✅ Precise material calculations (cement, sand, bricks, etc.)" }
                li { "✅ Simple and fast interface – no need for complex formulas or manual work" }
                li {
                    "✅ "
                    strong { "Offline support" }
                    " – works without an internet connection"
                }
                li {
                    "✅ "
                    strong { "Future update:" }
                    " Save and access your construction data online"
                }
            }
            p {
                "With Brico, you can "
                strong { "save both time and money" }
                "! 🚀"
                br {}
                strong { "Make your construction projects smarter and stress-free." }
            }
        }
    }
}


#[component]
fn Side_bar()->Element{
    rsx!(
        div { class: "side_bar",
            h1 { "Tools" }
            ul {
                li {
                    Link { class: "bricks", to: Route::BricksCalculation {},
                        "Bricks Calculation 🧱 "
                    }
                }
            }
        }
    )
}
#[component]
fn BricksCalculation() -> Element {
    let is_open = use_signal(|| false); // Sidebar toggle ke liye state
    let mut  height = use_signal(|| 12);
    let mut  length = use_signal(|| 30);
    let mut  thickness = use_signal(|| 9);
    let  brick_size = (9, 4, 3); // (length, width, thickness) in inches

    let calculate_bricks = move || {
        let wall_volume = (height() * 12) * (length() * 12) * thickness();
        let brick_volume = brick_size.0 * brick_size.1 * brick_size.2;
        wall_volume / brick_volume
    };

    rsx! {

        Header { is_open: is_open.clone() }
        if is_open() {
            Side_bar {}
        }

        div { class: "bricks_container",
            br {}
            h1 { "Bricks Calculation 🧱" }
            div {
                h2 { "Wall Height (feet)" }
                input {
                    r#type: "number",
                    value: "{height}",
                    oninput: move |e| height.set(e.value().parse().unwrap_or(0)),
                }
                h2 { "Wall Length (feet)" }
                input {
                    r#type: "number",
                    value: "{length}",
                    oninput: move |e| length.set(e.value().parse().unwrap_or(0)),
                }
                h2 { "Wall Thickness (inches)" }
                input {
                    r#type: "number",
                    value: "{thickness}",
                    oninput: move |e| thickness.set(e.value().parse().unwrap_or(0)),
                }
                br {}
                br {}
                button { onclick: move |_| {}, "Calculate" }
                h2 { "Total Bricks Required" }
                h1 { "{calculate_bricks()}" }
            }
        }
    }
}


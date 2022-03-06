export function RepositoryItem(props) {
    return (
        <section className="repository-item">
            <ul>
                <li>
                    <strong>{props.batata ?? "Default"}</strong>
                    <p>Forms in React</p>

                    <a href="/">Acesar repositório</a>
                </li>
            </ul>

        </section>
    )
}
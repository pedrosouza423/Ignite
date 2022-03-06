export function RepositoryItem(props) {
    return (
        <section className="repository-item">
            <ul>
                <li>
                    <strong>{props.repository?.name ?? "Default"}</strong>
                    <p>{props.repository.description}</p>

                    <a href={props.repository.link}>Acesar repositório</a>
                </li>
            </ul>

        </section>
    )
}
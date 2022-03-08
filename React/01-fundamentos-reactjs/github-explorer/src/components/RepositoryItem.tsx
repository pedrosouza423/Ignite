export function RepositoryItem(props) {
    return (
        <section className="repository-item">
            <ul>
                <li>
                    <strong>{props.repository?.name}</strong>
                    <p>{props.repository.description}</p>

                    <a href={props.repository.html_url}>Acesar repositório</a>
                </li>
            </ul>

        </section>
    )
}
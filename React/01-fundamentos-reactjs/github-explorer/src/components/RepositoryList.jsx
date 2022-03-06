import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "Exemplo",
    description: "Description",
    link: "http://google.com/",
}

export function RepositoryList(){
    return (
        <section class="repository-list">
            <h1>Lista de repositórios</h1>
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />
            <RepositoryItem repository={repository} />

        </section>
    )
}
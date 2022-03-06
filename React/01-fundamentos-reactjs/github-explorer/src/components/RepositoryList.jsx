import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){
    return (
        <section class="repository-list">
            <h1>Lista de repositórios</h1>
            <RepositoryItem repository="unform" description="Forms in React"/>
            <RepositoryItem/>
            <RepositoryItem/>
            <RepositoryItem/>

        </section>
    )
}
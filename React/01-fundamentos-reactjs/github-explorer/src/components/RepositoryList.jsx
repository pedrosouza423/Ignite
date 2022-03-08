import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useState, useEffect } from 'react';


export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/pedrosouza423/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section class="repository-list">
            <h1>Lista de repositórios</h1>
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository} />;
            })}

        </section>
    )
}
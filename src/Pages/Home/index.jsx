import style from "./style.module.css";

export const Home = () => {
    return (
        <div className={style.wrapper}>
            <main>
                <section
                    className={`${style.module} ${style.parallax} ${style.parallax1}`}
                >
                    <h1>Marcos Araujo Vieira</h1>
                    <h2>Desenvolvedor Front-End</h2>
                </section>
                <section className={`${style.module} ${style.content}`}>
                    <div className={style.container}>
                        <h2>Algum texto</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat veritatis tempore enim. Unde qui
                            voluptate dolore! Laboriosam, laborum! Qui
                            laudantium corporis reiciendis necessitatibus rerum
                            sit fugiat eos at cumque placeat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Assumenda eveniet labore dicta recusandae
                            vero, atque, tenetur aliquid asperiores inventore
                            dolore dignissimos, consequuntur impedit! A
                            doloremque dignissimos veritatis ex! Tempora,
                            ducimus!
                        </p>
                    </div>
                </section>
                <section
                    className={`${style.module} ${style.parallax} ${style.parallax2}`}
                >
                    <h1>Projetos</h1>
                </section>
                <section className={`${style.module} ${style.content}`}>
                    <div className={style.container}>
                        <h2>Algum texto</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat veritatis tempore enim. Unde qui
                            voluptate dolore! Laboriosam, laborum! Qui
                            laudantium corporis reiciendis necessitatibus rerum
                            sit fugiat eos at cumque placeat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Assumenda eveniet labore dicta recusandae
                            vero, atque, tenetur aliquid asperiores inventore
                            dolore dignissimos, consequuntur impedit! A
                            doloremque dignissimos veritatis ex! Tempora,
                            ducimus!
                        </p>
                    </div>
                </section>
                <section
                    className={`${style.module} ${style.parallax} ${style.parallax3}`}
                >
                    <h1>Tecnologias</h1>
                </section>
                <section className={`${style.module} ${style.content}`}>
                    <div className={style.container}>
                        <h2>Algum texto</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat veritatis tempore enim. Unde qui
                            voluptate dolore! Laboriosam, laborum! Qui
                            laudantium corporis reiciendis necessitatibus rerum
                            sit fugiat eos at cumque placeat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Assumenda eveniet labore dicta recusandae
                            vero, atque, tenetur aliquid asperiores inventore
                            dolore dignissimos, consequuntur impedit! A
                            doloremque dignissimos veritatis ex! Tempora,
                            ducimus!
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

import "./ProfilePage.css"

export const ProfilePage = () => {
    return (
        <section className="profile">
            <div className="container-button-profile">
                <button type="button">ESTUDIOS</button>
                <button type="button">EXPERIENCIAS</button>
            </div>
            <article className="container-info-profile">
                <div className="container-img-profile">
                    <img src="/graduation.svg" alt="profile" />
                </div>
                <div className="container-info-profile-1">
                    <div className="container-info-profile-1-item">
                        <div className="container-information">
                            <div className="container-date">
                                <div className="container-img-date">
                                    <img src="/calendar.svg" alt="calendar" />
                                </div>
                                <h3>2020 - 2024</h3>
                            </div>
                            <div className="information">
                                <h2>ANALISIS Y DESARROLLO DE SOFTWARE - SENA</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur provident ipsam deserunt a eos quia voluptate. Iusto amet sequi ipsum. Qui labore soluta laudantium sequi iure commodi. Nam, hic eligendi!
                                </p>
                            </div>
                            <div className="container-linear-profile">
                                <div className="container-radius-profile"></div>
                                <div className="linear-profile"></div>  
                            </div>
                        </div>
                    </div>
                    <div className="container-info-profile-2-item">
                        <h2>contenedor 2</h2>
                    </div>
                </div>
            </article>
        </section>
    )
}
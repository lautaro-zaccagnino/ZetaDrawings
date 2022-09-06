import React from 'react'
import logo from '../assets/ZD.jpg'

const NavBar = () => {
    return (
        <header style={styles.container}>
        <div style={styles.NavImg}>
            <a href=""><img src={logo} alt="logo" style={styles.imagen}/></a>
            <h1>Zeta Drawings</h1>
        </div>
        <nav>
            <a href="" style={styles.anchors}>Colección</a>
            <a href="" style={styles.anchors}>Youtube</a>
            <a href="" style={styles.anchors}>Sobre mí</a>
            <a href="" style={styles.anchors}>Contacto</a>
        </nav>
        </header>
    )
}

const styles= {
    container:{
        display: 'flex',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(108, 150, 199, 0.836)",
        padding: 20,
    },

    NavImg:{
        display: 'flex',
        alignItems: "center",
    },

    imagen:{
        width: 100,
        marginRight: 10,
    },

    anchors:{
        paddingRight: 20,
        textDecoration: "none",
        color: "black",
        fontWeight: 600,
    }

}



export default NavBar
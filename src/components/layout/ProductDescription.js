import React, { Component } from 'react';

const style = {
    description: {
        fontSize: '14px',
        color: 'c7c7c7'
    }
}
class ProductDescription extends Component {
    render() {
        return (
            <div className="container pt-3">
            <hr />
                <p>Description</p>
                <p style={style.description}>Vends Epiphone Korina Flying V<br />
Elle est en condition NEUVE, il n’y a aucune trace d’usure.<br />
Le Pickguard d’origine blanc a été remplacé pour un noir.<br />
Le cache du Truss Rod a été remplacé par un Gibson.<br />
Elle est ainsi dans le style « Joe Bonamassa 1958 - Amos ».<br />
Je suis le deuxième propriétaire, je l’ai très peut utilisée et elle n’est jamais sortie de chez moi.<br />
Je fourni la housse.<br />
<br />
Possibilité de venir l’essayer à Paris dans le 15ème arrondissement.<br />
<br />
C’EST UN PRODUIT ORIGINAL !!!<br />
<br />
Caractéristiques :<br />
Corps : Korina<br />
Manche collé en Korina<br />
Touche : Palissandre<br />
Profil 'Slim Taper'<br />
Frettes : 22v<br />
Diapason : 24.75"<br />
Largeur au sillet : 1.68" - 42.67 mm<br />
Micro chevalet : double bobinage Epiphone Humbucker Alnico Classic Plus<br />
Micro chevalet : double bobinage Epiphone Humbucker Alnico Classic<br />
Contrôles : 1 volume par micro, 1 tonalité, sélecteur 3 positions<br />
Chevalet : Epiphone Tun-O- ... lire plus</p>
<hr />

            </div>
        );
    }
}

export default ProductDescription;

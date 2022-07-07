const db = new Dexie('ApplicationShopping')
db.version(1).stores({ article: '++id,nom ,prix ,estAcheté' })

const formArticle = document.getElementById('formArticle')
const affichageListe = document.getElementById('affichageListe')
const espacePrixTotal = document.getElementById('espacePrixTotal')


const remplirAffichageListe = async () => {
    const touteArticle = await db.article.reverse().toArray()
    affichageListe.innerHTML = touteArticle.map(article => ` 
    
    <div class="article ${article.estAcheté && 'acheté'}">
    <input type="checkbox" 
     class="checkbox"
     onchange=toggleEtatDeArticle(event,${article.id})
     ${article.estAcheté && 'checked'} />

    <div class="articleInfo">
      <p>${article.nom}</p>
      <p>${article.prix}dh x ${article.quantité}</p>
    </div>
    <button class="buttonSupprimer" onclick="supprimerArticle(${article.id})">
    X</button>
  </div>

</div>  `).join('')

    const tableauDePrix = touteArticle.map(article => article.prix * article.quantité)
    const prixTotal = tableauDePrix.reduce((a, b) => a + b, 0)
    espacePrixTotal.innerText = 'Prix total :' + prixTotal + 'DH'
}

window.onload = remplirAffichageListe()

/*function to fill the dataBase*/
formArticle.onsubmit = async (e) => {
    e.preventDefault()

    const nom = document.getElementById('nomArticle').value
    const quantité = document.getElementById('qty').value
    const prix = document.getElementById('prixArticle').value
    await db.article.add({ nom, quantité, prix })

    await remplirAffichageListe()
    formArticle.reset()



}

/*acheter Function*/
const toggleEtatDeArticle = async (event, id) => {
    await db.article.update(id, { estAcheté: !!event.target.checked })
    await remplirAffichageListe();
}

const supprimerArticle = async (id) => {
    await db.article.delete(id)
    await remplirAffichageListe();
}



function start() {

  let pesquisa = document.querySelector('#pesquisa').value
  let name = document.querySelector('#cont-title-name')
  let name_arroba = document.querySelector('#title_card_name')
  let logo_perfil = document.querySelector('#logo-perfil')
  let bio = document.querySelector('#title_card_bio')
  let repos = document.querySelector('#infos-repos')
  let follow = document.querySelector('#infos-follow')
  let following = document.querySelector('#infos-following')
  let cidade = document.querySelector('#cidade')
  let twitter = document.querySelector('#twitter')
  let link = document.querySelector('#footer-link')
  let empresa = document.querySelector('#empresa')
  let join = document.querySelector('#title_card_joined')

  if(pesquisa){
    
    fetch(`https://api.github.com/users/${pesquisa}`)
    .then(r => r.json())
    .then(res2 => 
      consome(res2)
    )



    function consome(dados){
      console.log(dados);

      document.querySelector('#pesquisa').value = ''
      // img perfil 
      logo_perfil.innerHTML = `
        <img id="logo-perfil-img" src="${dados.avatar_url}" alt="sem img">
      `
      // name 
      name.innerText = ''
      name.innerText = dados.name

      // name_arroba 
      name_arroba.innerText = ''
      name_arroba.innerText = `@${dados.login}`

      // bio
      bio.innerText = dados.bio

      // repos 
      repos.innerText = dados.public_repos

      // follow
      follow.innerText = dados.followers

      // following
      following.innerText = dados.following

      // cidade
      cidade.innerText = dados.location ? dados.location.split(' ')[0] : 'No City'

      // empresa 
      empresa.innerText = dados.company ? dados.company : 'No Company'

      // twitter 
      twitter.innerText = dados.twitter_username ? dados.twitter_username : 'Not Available' 

      // link 
      link.innerHTML = `
      <img src="assets/img/link-45deg.svg" alt="">           
      <a 
        class="footer-descricao"
        href="https://github.com/${dados.login}" 
        id="link"
        target="_blanck">
        https://github.com/...
      </a>`


      // join

      // console.log(dados.updated_at)2021-09-26T21:38:59Z
      let join_dia = dados.created_at.match(/([0-9]{2})[T]/g).join('').replace(/[T]/g, '')/*dia */ 
      let join_mes = dados.created_at.match(/[-]([0-9]{2})[-]/g).join('').replace(/[-]/g, '')/* mes*/
      let join_ano = dados.created_at.match(/[0-9]{4}/g).join('')/*ano */
      let mes_certo = ''
      
      const meses = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
        for(let i in meses){
          if(i == Number(join_mes)){
            mes_certo = meses[i]
            break
          }
        }
        join.innerText = `Joined ${mes_certo} ${join_dia} ${join_ano}`
      }
    }
  }

// dark mode
let atv = false;
let title_darkMode = document.querySelector('#title_dark_light');
let divSearch = document.querySelector('.div-search');
let section = document.querySelector('section');

function dark_light(){
  let sla = atv == false ? atv = true : atv = false
  if(atv == true){
    title_darkMode.innerText = 'Not Available';
  }

  if(atv == false){
    title_darkMode.innerText = 'Dark';
  }
}
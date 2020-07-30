const navbarTarget = document.querySelector(".navbar--container")

export const Navbar = () => {
      
      navbarTarget.innerHTML = `
            <ul class="navbar">
                  <li class="navbar--item">
                        <a class="link link--create-team cursor--link" href="#">
                              Create Team
                        </a>
                  </li>
                  <li class="navbar--item">
                        <a class="link  link--create-player cursor--link" href="#">
                              Create Player
                        </a>
                  </li>
                  <li class="navbar--item">
                        <a class="link link--choose-teams cursor--link" href="#">
                              Choose Teams
                        </a>
                  </li>
                  <li class="navbar--item">
                        <a class="link link--play-game cursor--link" href="#">
                              Play Game
                        </a>
                  </li>
            </ul>
      `
}
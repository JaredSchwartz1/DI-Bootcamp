let navbar = document.getElementById('navbar');
    (function displayUser(username) {
        let userInfoDiv = document.createElement('div')
        navbar.appendChild(userInfoDiv)
        let usernameTitle = document.createElement('h1')
        let usernameTitleText = document.createTextNode(username)
        usernameTitle.appendChild(usernameTitleText)
        userInfoDiv.appendChild(usernameTitle)
        let userImage = document.createElement('img')
        userImage.setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png')
        userImage.setAttribute('width','300px')
        userImage.setAttribute('height','200px')
        userImage.setAttribute('alt', username)
        userInfoDiv.appendChild(userImage)
    })('Jared')
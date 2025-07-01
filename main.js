function dark() {
    let body = document.querySelector('body')
    body.classList.toggle('dark')
    let container = document.querySelector('.container')
    let black = container.classList.toggle('dark')
    let img = document.querySelector('.mode-btn')
    let h1 = document.querySelector('h1')
    h1.classList.toggle('white')
    let ul = document.querySelector('ul')
    ul.classList.toggle('white')
}

let btn = document.querySelector('.send-btn')
let malumot = []

btn.addEventListener('click', () => {
    let input = document.querySelector('.input')
    let valueInput = input.value
    if (valueInput !== '') {
        malumot.push(valueInput)
        let ul = document.querySelector('ul')
        let li = document.createElement('li')
        li.classList = 'list'
        li.innerHTML = `<input class="check" type="checkbox" /> ${valueInput}
        <div class="icons">
            <span class="icon">✏️</span>
            <span class="delete">🗑</span>
        </div>`

        let deleteIcon = li.querySelector('.delete')
        deleteIcon.addEventListener('click', () => {
            li.remove()
        })

        let check = li.querySelector('.check')
        check.addEventListener('click', () => {
            li.style.textDecoration = 'line-through'
            li.style.color = 'grey'
            check.disabled = true
        })

        ul.appendChild(li)
    } else {
        alert('Iltimos malumot kiriting!')
    }
    input.value = ''    
})
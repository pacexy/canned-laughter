import audios from './audios'

function play() {
  const audio = document.createElement('audio')

  audio.classList.add('canned-laughter')
  audio.volume = 0.5
  document.body.append(audio)

  audio.addEventListener('pause', () => {
    audio.remove()
  })

  const i = Math.floor(Math.random() * audios.length)
  audio.src = audios[i]
  audio.play()
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'h') {
    play()
  }
})

console.log('[canned-laughter] loaded')

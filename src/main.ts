import { cannedLaughter } from './audios'

function createAudio() {
  const audio = document.createElement('audio')

  audio.id = 'canned-laughter'
  audio.src = cannedLaughter
  audio.volume = 0.5
  document.body.append(audio)

  return audio
}

const audio = createAudio()

window.addEventListener('keydown', (e) => {
  if (e.key === 'h') {
    audio.play()
  }
})

console.log('[canned-laughter] loaded')

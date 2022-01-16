
export function player({asset,volume = 0.5}) {
    const audio = new Audio()
    audio.scr = asset
    audio.volume = volume
}
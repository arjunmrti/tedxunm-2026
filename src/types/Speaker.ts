export interface SpeakerColors {
  cardBg: string
  cardBorder: string
  cardHoverBorder: string
  badgeBorder: string
  badgeText: string
  titleHover: string
  iconHover: string
  dot: string
}

export interface Speaker {
  tag: string
  name: string
  age: string
  role: string
  talk: string
  category: string
  behavior: string[]
  painPoint: string[]
  needs: string[]
  cardImage: string
  modalImage: string
  colors: SpeakerColors
}
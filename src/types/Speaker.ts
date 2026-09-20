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
  name: string
  role: string
  talk: string
  bio: string
  keyMessage: string
  social?: string
  cardImage: string
  modalImage: string
  colors: SpeakerColors
}

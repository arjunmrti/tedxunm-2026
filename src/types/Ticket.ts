export interface Ticket {
  variant: 'soldout' | 'featured' | 'standard'
  category: string
  badge: string
  title: string
  description: string
  price: string
  priceNote: string
  features: string[]
  buttonText: string
  disabled?: boolean
  ticketName: string
  ticketPrice: string
}
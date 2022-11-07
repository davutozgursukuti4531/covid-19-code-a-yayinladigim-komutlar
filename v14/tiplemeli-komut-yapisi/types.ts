//öncelikle bu dosyayı commands klasörünün dışına types adlı bir klasör açıp onun içinde açmanız gerekmektedir
import { Client, CommandInteraction, Message, Awaitable, PartialMessage } from "discord.js"

export type CommandOptionTypes = "string" | "integer" | "number" | "boolean" | "user" | "channel" | "role" | "mentionable"


export interface ChoisesBuilder {
    name: string
    value: string
}

export interface CommandOptionData {
    type: CommandOptionTypes
    name: string
    description: string
    required?: boolean | undefined
    choises: ChoisesBuilder[]
}

export interface SlashCommandInterface {
    slash: boolean
    name: string[]
    description: string
    dbl: boolean
    options: CommandOptionData[]
    execute: (client: Client, interaction: CommandInteraction) => void | Promise | Awaitable
}
export interface MessageCommandInterface {
    slash: boolean
    name: string[]
    description: string
    dbl: boolean
    execute: (client: Client, message: Message | PartialMessage) => void | Promise | Awaitable
}

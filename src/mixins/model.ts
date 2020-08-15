import {Component} from 'vue'

export class ColumnSize {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

export class EditTabItem {
    name!: string
    title!: string
    component!: Component
    data?: any

    constructor(name: string, title: string, component: Component) {
        this.name = name
        this.title = title
        this.component = component
    }
}

export class BodyTabItem {
    editTabs!: EditTabItem[]
    currentTabIndex!: string
    nameNum!: number

    constructor(tabs: EditTabItem[]) {
        this.editTabs = tabs
        if (tabs.length !== 0) {
            this.currentTabIndex = tabs[0].name
            this.nameNum = tabs.length + 1
        }
    }
}

export class ColSize {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

export class StepItem {
    title!: string
    status: 'wait' | 'process' | 'finish' | 'error' | 'success' = 'process'
}

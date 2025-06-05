export function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-6 space-y-6">
            {children}
        </div>
    )
}

export function PageHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between">
            {children}
        </div>
    )
}

export function PageHeaderContent({ children }: { children: React.ReactNode }) {
    return (
        <div className="space-y-1">
            {children}
        </div>
    )
}

export function PageTitle({ children }: { children: React.ReactNode }) {
    return <h1 className="text-2xl font-bold">{children}</h1>
}

export function PageDescription({ children }: { children: React.ReactNode }) {
    return <p className="text-sm text-muted-foreground">{children}</p>
}

export function PageActions({ children }: { children: React.ReactNode }) {
    return <div className="flex items-center gap-2">{children}</div>
}

export function PageContent({ children }: { children: React.ReactNode }) {
    return <div className="space-y-6">{children}</div>
}

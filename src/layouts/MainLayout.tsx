import Header from '@/components/Header'
import TodoApp from '@/pages/Todo'
import React from 'react'

const MainLayout = () => {
    return (
        <div className={`min-h-screen flex flex-col gap-12 items-center justify-center bg-light-body dark:bg-dark-body`}>
            <Header />
            <TodoApp />
        </div>
    )
}

export default MainLayout
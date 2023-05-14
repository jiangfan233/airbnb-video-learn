'use client';     // 表明这是一个client组件，而非server组件

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div 
            className="
                max-w-[2520px]
                mx-auto
                px-4
                sm:px-2
                md:px-10
                xl:px-20
            "
        >
            {children}
        </div>
    )
}

export default Container;
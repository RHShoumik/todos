import React from 'react'

interface TypographyProps {
    text?: string;
    color?: string;
    size?: string;
    fontWeight?: string;
    children?: string;
}

const Typography: React.FC<TypographyProps> = (props) => {
    const { text, color="text-inherit", size="text-sm", fontWeight="font-normal", children } = props;
    return (
        <p className={`inline-block ${color} ${size} ${fontWeight}`}>{text || children}</p>
    )
}

export default Typography
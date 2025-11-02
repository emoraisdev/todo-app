export default props => {

    const toCssClasses = (numbers) => {

        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if (cols[0]) classes += `col-${cols[0]}`
        if (cols[1]) classes += ` col-sm-${cols[1]}`
        if (cols[2]) classes += ` col-md-${cols[2]}`

        return classes
    }

    return (
        <div className={toCssClasses(props.cols || '12')}>
            {props.children}
        </div>
    )
}
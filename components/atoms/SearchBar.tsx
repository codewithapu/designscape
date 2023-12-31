import styles from 'styles/components/atoms/SearchBar.module.scss'

const SearchBar = () => {
    return (
        <button className={styles.SearchBar}>

            <svg className={styles.SearchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M14.4973 13.7563C17.7372 9.97451 14.933 3.95857 9.94297 4.00022C8.36745 4.00198 6.85696 4.62864 5.7429 5.7427C4.62884 6.85677 4.00219 8.36726 4.00044 9.94279C3.94076 14.9231 9.98465 17.7398 13.7551 14.4961L16.759 17.5L17.5 16.759L14.4973 13.7563ZM6.4871 13.4074C3.40506 10.3893 5.62622 5.01869 9.94314 5.04831C11.2408 5.04976 12.4849 5.56589 13.4024 6.48347C14.32 7.40105 14.8361 8.64514 14.8376 9.94279C14.8797 14.2485 9.50491 16.4776 6.4871 13.4074Z" />
            </svg>

            search for resources, books, chapters, ...

        </button>
    )
}

export default SearchBar

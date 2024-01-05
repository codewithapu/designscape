import styles from 'styles/components/atoms/SearchBar.module.scss'

const SearchBar = () => {
    return (
        <button className={styles.SearchBar}>

            <svg className={styles.SearchIcon} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="none">
                <path d="M13.4973 12.7563C16.7372 8.97451 13.933 2.95857 8.94297 3.00022C7.36745 3.00198 5.85696 3.62864 4.7429 4.7427C3.62884 5.85677 3.00219 7.36726 3.00044 8.94279C2.94076 13.9231 8.98465 16.7398 12.7551 13.4961L15.759 16.5L16.5 15.759L13.4973 12.7563ZM5.4871 12.4074C2.40506 9.3893 4.62622 4.01869 8.94314 4.04831C10.2408 4.04976 11.4849 4.56589 12.4024 5.48347C13.32 6.40105 13.8361 7.64514 13.8376 8.94279C13.8797 13.2485 8.50491 15.4776 5.4871 12.4074Z" />
            </svg>

            search for anything ...

        </button>
    )
}

export default SearchBar

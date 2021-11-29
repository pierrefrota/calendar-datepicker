import styles from './styles.module.scss';

export const HomeScreen = () => {
    return (
        <div className={styles.container}>
            <h1>Portal DatePicker</h1>
            <div className={styles.content}>
                <div className={styles.calendar}>
                    <div className={styles.calendarHeader}>
                        <h2 id="month">Abril</h2>
                        <h2 id="month">2021</h2>
                    </div>
                    <div className={styles.calendarContent}>
                        <table>
                            <thead>
                                <tr>
                                    <td>Dom</td>
                                    <td>Seg</td>
                                    <td>Ter</td>
                                    <td>Qua</td>
                                    <td>Qui</td>
                                    <td>Sex</td>
                                    <td>Sab</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td className={styles.otherMonth}>7</td>
                                </tr>    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
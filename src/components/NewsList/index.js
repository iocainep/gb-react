import React from 'react'
import {Button} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {fetchNews, NEWS_REQUEST_STATUS, setNewsList} from '../../store/news'

export const NewsList = (props) => {
    const {status, list} = useSelector((state) => state.news)
    const dispatch = useDispatch()

    const loadData = () => dispatch(fetchNews())
    const clearData = () => dispatch(setNewsList([]))

    React.useEffect(() => {
        loadData()
    }, [])

    if (status === NEWS_REQUEST_STATUS.LOADING) {
        return <p>Загрузка новостей, подождите</p>
    }

    return (
        <div>
            {status !== NEWS_REQUEST_STATUS.ERROR ? (
                <ol className="bordered">
                    { list.map((newsItem) => (
                        <li key={newsItem.id}>
                        <p>{newsItem.title}</p>
                        </li>
                        ))
                    }
                </ol>
            ) : (
                <div className="bordered">
                    <p style={{color: 'red'}}>Что-то пошло не так</p>
                    <button onClick={loadData}>Попробовать еще раз</button>
                </div>
            )}
            <Button variant="contained" onClick={loadData}>Обновить новостную ленту</Button>
            <Button variant="outlined" onClick={clearData}>Очистить страницу</Button>
        </div>
    )
}
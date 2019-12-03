import React, { useState, Fragment } from 'react'
import FormInput from '../form-input/form-input.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { GifImageContainer, GifImageElement } from './gif-modal.styles'
import { selectUserId, selectCurrentuser } from '../../redux/user/user.selectors'
import { selectCurrentGif } from '../../redux/gif/gif.selector'
import { getGifStart } from '../../redux/gif/gif.action'
import { sendNewMessageStart } from '../../redux/chat/chat.actions'
import CustomButton from '../custom-button/custom-button.component'


const GifModal = ({currentUser, userId, getGifStart, gifData, sendNewMessageStart, setModalDisplay }) => {

    const [gifSearchTerm, setGifSearchTerm] = useState("")

    const handleChange = event => {
        const { value } = event.target
        setGifSearchTerm(value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        getGifStart(gifSearchTerm)
    }



    return (
        <Fragment>
            {gifData.length ?
                <GifImageContainer>
                    {/* {gifData.map(({ id, images: { downsized: { url } } }) => ( */}
                    {gifData.map(element => (
                        <GifImageElement
                            key={element.id}
                            alt="gifImage"
                            src={element.images.downsized.url}
                            onClick={() => {
                                sendNewMessageStart(
                                    {
                                        currentUser,
                                        userId,
                                        url: element.images.downsized.url
                                    })
                                setModalDisplay(false)
                            }
                            }
                        />
                    ))}
                </GifImageContainer>
                : null}

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    value={gifSearchTerm}
                    label="Search term"
                    onChange={handleChange}
                    required
                />
                <CustomButton type="submit" stlye={{ cursor: 'pointer' }}>Search</CustomButton>
            </form>
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    gifData: selectCurrentGif,
    currentUser: selectCurrentuser,
    userId: selectUserId
})

const mapDispatchToProps = dispatch => ({
    getGifStart: (gifSearchTerm) => dispatch(getGifStart(gifSearchTerm)),
    sendNewMessageStart: (msgInfo) => dispatch(sendNewMessageStart(msgInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(GifModal)
const bel = require('bel')

module.exports = function (rating, isWhitelisted) {
    let msg = ``
    let _rating = isWhitelisted ? rating.before : rating.after

    if (_rating) {
        msg = `This received a "${_rating.toUpperCase()}" Privacy Grade
          for the reasons below.`
    }

    return bel`<p class="site-info--details__explainer
        js-rating-explainer border--bottom">
            ${msg}
        </p>`
}
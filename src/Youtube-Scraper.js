const requester = require('./TrendingRequester')
const htmlParser = require('./HtmlParser')
class YoutubeScraper {
  // starting point
  static async scrapeTrendingPage({ page = 'default', geoLocation = null, parseCreatorOnRise = false,agent=null } = {}) {
    const requestData = await requester.requestTrendingPage(geoLocation, page, agent)
    return htmlParser.parseNewHtml(requestData.data, parseCreatorOnRise)
  }
}
module.exports = YoutubeScraper

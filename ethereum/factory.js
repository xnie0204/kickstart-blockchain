
//sol and front-end API
import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x41272bb631C157CC88f4d8e25703F62a2c8AD41e'
)

export default instance
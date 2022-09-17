import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../Component/Layout'
import {Link} from '../routes'

class CampaignIndex extends Component {

    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};

    }

    renderCampaigns () {
        const item = this.props.campaigns.map(address => {
            return {
              header: address,
              description: (
                <Link route={`/campaigns/${address}`}>
                  <a>View Campaign</a>
                </Link>
              ),
              fluid: true,
            };
        });

        return <Card.Group items = {item} />
    }
    

    //can not run in Next server
    // async componentDidMount() {
    //     const campaign = await factory.methods.getDeployedCampaigns().call();
    //     console.log(campaign);
    // }

    render() {
        return (
          <Layout>
            <div>
              <h3> Open Campaigns </h3>
              <Link route="/campaigns/new">
                <a>
                  <Button
                    floated="right"
                    content="Create Campaign"
                    icon="add circle"
                    primary
                  />
                </a>
              </Link>
              {this.renderCampaigns()}
            </div>
          </Layout>
        );
    }
}

export default CampaignIndex;
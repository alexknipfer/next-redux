import AddForm from '../AddForm/AddForm'
import { Grid } from 'semantic-ui-react'

export default () => (
    <div className='list-view'>
        <Grid padded>
            <Grid.Row>
                <Grid.Column>
                    <h2>List View</h2>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <AddForm />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <style jsx>{`
            .list-view {
                margin-top: 80px;
                display: flex;
                justify-content: center;
            }
        `}</style>
    </div>
)
import * as React from 'react';

import Tile from '../Tile/Tile';
import './Tile.css';

interface TileGridProps {
    companyNames?: string[];
    getAllCompanyNames?: () => any;
}

interface OwnState {

}

class TileGrid extends React.Component<TileGridProps, OwnState> {
    constructor(props: TileGridProps) {
        super(props);
    }

    componentWillMount() {
        if (this.props.companyNames && this.props.companyNames.length === 0) {
            this.props.getAllCompanyNames && this.props.getAllCompanyNames();
        }
      }

    getTiles() {
        const { companyNames } = this.props;
        const name: string = 'name';

        if (companyNames) {
            return companyNames.map((value: string, index: number) => {
                return (
                    <div className="Tile" key={index}>
                        <Tile name={value[name]} />
                    </div>
                );
            });
        }

        return <div/>;
    }

    render(): JSX.Element {
        const tiles = this.getTiles();

        return (
            <div className="Tile-Grid">
                {tiles}
            </div>
        );
    }
}

export default TileGrid;

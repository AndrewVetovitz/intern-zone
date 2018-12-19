import * as React from 'react';
import { Helmet } from 'react-helmet';

import Typography from '@material-ui/core/Typography';

import CompanyTable from '../CompanyTable/CompanyTable';

import { Posting } from '../../store/company/types';

import constants from '../../constants';

let title: string;
let content: string;

export interface CompanyInputProps {
    readonly match: {
        readonly params: {
            readonly name: string;
        }
    };

}

export interface CompanyProps extends CompanyInputProps {
    getCompanyByName: (name: string) => any;
    company: {
        name: string;
        description: string;
        postings: Posting[];
        fetching?: boolean;
        fetched?: boolean;
        error?: any;
    };
}

class Company extends React.Component<CompanyProps, {}> {
    constructor(props: CompanyProps) {
        super(props);

        title = constants.TITLE + ' | ' + this.props.match.params.name;
        content = constants.TITLE + ' ' + this.props.match.params.name + ' company page';
    }

    componentDidMount(): void {
        if (this.props.company === undefined || this.props.company.name !== this.props.match.params.name) {
            this.props.getCompanyByName && this.props.getCompanyByName(this.props.match.params.name);
        }
    }

    companyHeader(name: string): JSX.Element {
        return (
            <Typography variant="h3">
                {name}
            </Typography>
        );
    }

    companyDescription(description: string): JSX.Element {
        return (
            <Typography component="p">
                {description}
            </Typography>
        );
    }

    companyPosting(postings: Posting[]): JSX.Element | JSX.Element[] {
        if (postings.length > 0) {
            return <CompanyTable data={postings} />;
        }

        return <React.Fragment />;
    }

    render(): JSX.Element {
        const name: string = this.props.match.params.name;
        const header: JSX.Element = this.companyHeader(name);

        if (this.props.company !== undefined && this.props.company.name === name) {
            const { description, postings } = this.props.company;

            const body: JSX.Element = this.companyDescription(description);
            const table: JSX.Element | JSX.Element[] = this.companyPosting(postings);

            return (
                <React.Fragment>
                    <Helmet defer={false}>
                        <title>{title}</title>
                        <meta charSet="utf-8" />
                        <meta name="Description" content={content}></meta>
                    </Helmet>

                    {header}
                    <br />
                    {body}
                    <br />
                    {table}
                </React.Fragment>
            );
        }

        return header;
    }
}

export default Company;

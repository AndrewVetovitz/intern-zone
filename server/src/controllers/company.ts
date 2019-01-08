import { Request, Response } from 'express';

import { Company } from '../entity/Company';

/**
 * GET /api/company/all
 * Retrieve all company names
 */
const getAllCompanyNames = (req: Request, res: Response) => {
    Company.createQueryBuilder().select('name').execute().then(res => {
        console.log(res);
    }).catch((err: Error) => {
        console.log(err);
    });

    res.status(200).json({
        companies: [
            'Amazon',
            'Google',
            'Facebook',
            'Microsoft',
            'Two Sigma',
            'Goldman Sachs',
            'Apple',
            'Texas Instruments',
            'De Shaw',
            'MongoDB',
            'Airbnb',
            'Walmart',
            'Visa',
            'Stripe',
            'Amazon',
            'Google',
            'Facebook',
            'Microsoft',
            'Two Sigma',
            'Goldman Sachs',
            'Apple',
            'Texas Instruments',
            'De Shaw',
            'MongoDB',
            'Airbnb',
            'Walmart',
            'Visa',
            'Stripe',
            'Amazon',
            'Google',
            'Facebook',
            'Microsoft',
            'Two Sigma',
            'Goldman Sachs',
            'Apple',
            'Texas Instruments',
            'De Shaw',
            'MongoDB',
            'Airbnb',
            'Walmart',
            'Visa',
            'Stripe',
            'Amazon',
            'Google',
            'Facebook',
            'Microsoft',
            'Two Sigma',
            'Goldman Sachs',
            'Apple',
            'Texas Instruments',
            'De Shaw',
            'MongoDB',
            'Airbnb',
            'Walmart',
            'Visa',
            'Stripe',
            'Amazon',
            'Google',
            'Facebook',
            'Microsoft',
            'Two Sigma',
            'Goldman Sachs',
            'Apple',
            'Texas Instruments',
            'De Shaw',
            'MongoDB',
            'Airbnb',
            'Walmart',
            'Visa',
            'Stripe'
        ]
    });
};

/**
 * GET /api/company/:name
 * Retrieve company by name
 */
const getCompanyByName = (req: Request, res: Response) => {
    const name = req.params.name;

    Company.createQueryBuilder().where('name = :name', { name }).execute().then((response: any) => {
        console.log(response);
    }).catch((err: Error) => {
        console.log(err);
    });

    res.status(200).json({
        company: {
            name: name,
            description: name + ' full desciption',
            postings: [
                {
                    positionName: 'software',
                    location: 'california',
                    link: 'https://google.com'
                },
                {
                    positionName: 'software',
                    location: 'california',
                    link: 'https://google.com'
                },
                {
                    positionName: 'software',
                    location: 'california',
                    link: 'https://google.com'
                }
            ]
        }
    });
};

export { getAllCompanyNames, getCompanyByName };

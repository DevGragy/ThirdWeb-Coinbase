import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'beggeg2b',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skgQQlqcW1g7SJ4M2vaXOCtkIrcBYKZVr2OgBay1RFD1ONNlPUA07ys1S141R2cDGy87f8RaGiSF5C197uSARYAfiVslqZ1DC65WT7wzR22Yk0sD8ckginuY5r9ojvo2kWoKJg0aJ7rmVC2OXPmFQNddN4TVIJ6b3P5ya04udUaGtzXJYH1t',
    useCdn: false,  
})
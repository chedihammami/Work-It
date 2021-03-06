/**
 * Student Jobs API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface JobOffer { 
    offerId?: number;
    title?: string;
    datePosted?: string;
    status?: JobOffer.StatusEnum;
    employmentType?: JobOffer.EmploymentTypeEnum;
    /**
     * job industry/field (IT, retail..). Define an enum in UI.
     */
    category?: string;
    /**
     * concat of city+governorate
     */
    location?: string;
    salary?: string;
    description?: string;
    /**
     * in DB, this is one string in csv list format
     */
    requirements?: Array<string>;
    /**
     * in DB, this is one string in csv list format
     */
    responsibilities?: Array<string>;
    about?: string;
    hoursPerWeek?: number;
    /**
     * in DB, this is one string in csv list format
     */
    languages?: Array<string>;
    companyId?: number;
    employerId?: number;
}
export namespace JobOffer {
    export type StatusEnum = 'open' | 'closed';
    export const StatusEnum = {
        Open: 'open' as StatusEnum,
        Closed: 'closed' as StatusEnum
    };
    export type EmploymentTypeEnum = 'fulltime' | 'partime/flexible' | 'weekend' | 'temporary' | 'summer/holidays' | 'internship' | 'graduate';
    export const EmploymentTypeEnum = {
        Fulltime: 'fulltime' as EmploymentTypeEnum,
        Partimeflexible: 'partime/flexible' as EmploymentTypeEnum,
        Weekend: 'weekend' as EmploymentTypeEnum,
        Temporary: 'temporary' as EmploymentTypeEnum,
        Summerholidays: 'summer/holidays' as EmploymentTypeEnum,
        Internship: 'internship' as EmploymentTypeEnum,
        Graduate: 'graduate' as EmploymentTypeEnum
    };
}
import React from 'react';

export class HomeDto {
  /**
   * Defines the background color of the component
   *
   * @memberof HomeDto
   */
  backgroundColor: string;

  /**
   * Current date for the component
   *
   * @type {Date}
   * @memberof HomeDto
   */
  currentDate: Date;

  /**
   * URL to profile photo, used in an <img> tag
   *
   * @type {string}
   * @memberof HomeDto
   */
  profilePhotoUrl: string;
}

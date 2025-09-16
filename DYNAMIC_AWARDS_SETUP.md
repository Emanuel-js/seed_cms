# Dynamic SEED Awards System

This document explains how to set up and use the dynamic SEED Awards system that automatically manages award events, nominations, and announcements based on dates.

## Overview

The dynamic awards system automatically:

- Shows the correct award year based on the current date (May-based logic)
- Displays appropriate content based on the award cycle phase
- Updates banners and status messages automatically
- Manages nomination periods and award announcements

## Setup Instructions

### 1. Sanity Studio Setup

1. **Create Award Event Document**

   - Go to your Sanity Studio
   - Navigate to "Award Event" content type
   - Create a new award event with the following fields:

   **Required Fields:**

   - Event Year: The year of the awards (e.g., 2025)
   - Event Title: "Society of Ethiopians Established in Diaspora (SEED)"
   - Event Date: The actual awards ceremony date
   - Event Location: City and state
   - Event Venue: Specific venue name
   - Nomination Deadline: When nominations close
   - Award Announcement Date: When winners are announced
   - Years Strong: Number of years SEED has been running
   - Status: Current status (will auto-update based on dates)

   **Optional Fields:**

   - Event Subtitle: Additional event description
   - Primary/Secondary/Accent Colors: Custom colors for the event
   - Registration Enabled: Whether registration is open
   - Registration URL: Link to registration form
   - Featured Honorees: Select honorees to feature on the banner

2. **Set Event Status**
   The system automatically determines status based on dates:
   - **Nominations Open**: Before nomination deadline
   - **Nominations Closed**: Between deadline and announcement
   - **Awards Announced**: Between announcement and event
   - **Event Completed**: After event date

### 2. Award Cycle Timeline

The system follows this timeline:

```
January - April: Show previous year's awards
May - December: Show current year's awards
```

**Example for 2025:**

- Before May 1, 2025: Shows 2024 awards
- After May 1, 2025: Shows 2025 awards

### 3. Content Management

#### Award Events

- Create one active award event per year
- Set `isActive` to true for the current event
- Update status manually if needed (though it auto-updates)

#### Honorees

- Add honorees with the correct year
- Set recipient type (adult/student)
- Add award type and description
- Upload recipient photos

#### Featured Honorees

- Select honorees to feature on the main banner
- These will appear in the banner carousel

## Automatic Features

### 1. Dynamic Year Display

- Automatically shows the correct award year
- Updates based on May 1st cutoff date

### 2. Status-Based Content

- **Nominations Open**: Shows nomination forms and deadlines
- **Nominations Closed**: Shows "stay tuned" messages
- **Awards Announced**: Shows honoree announcements
- **Event Completed**: Shows celebration messages

### 3. Banner Updates

- Banner automatically shows relevant content
- Countdown timer when appropriate
- Honoree showcase when awards are announced

### 4. Status Banner

- Real-time status updates
- Countdown to important dates
- Quick links to nominations when open

## Usage Examples

### Setting Up 2025 Awards

1. **Create Award Event:**

   ```
   Event Year: 2025
   Event Date: 2025-05-25
   Nomination Deadline: 2025-03-01
   Award Announcement Date: 2025-04-15
   Status: nominations_open
   ```

2. **Add Honorees:**

   - Create honor documents for 2025
   - Set year to 2025
   - Add recipient information

3. **Feature Honorees:**
   - Select honorees in the award event
   - They'll appear on the banner

### Content Flow

**January - February 2025:**

- Shows 2024 awards
- Displays "Nominations Open" for 2025
- Banner shows countdown to nomination deadline

**March 2025:**

- Shows 2024 awards
- Displays "Nominations Closed" for 2025
- Banner shows countdown to announcement

**April 2025:**

- Shows 2024 awards
- Displays "Awards Announced" for 2025
- Banner shows new honorees

**May 2025 onwards:**

- Shows 2025 awards
- Displays current honorees
- Banner celebrates the event

## Troubleshooting

### Common Issues

1. **No Awards Showing**

   - Check if award event is marked as active
   - Verify honorees have the correct year
   - Ensure photos are uploaded

2. **Wrong Year Displayed**

   - Check the date logic in `awardUtils.ts`
   - Verify current date vs May 1st cutoff

3. **Status Not Updating**
   - Check event dates in Sanity
   - Verify nomination deadline and announcement dates
   - Clear browser cache

### Manual Overrides

If automatic status detection isn't working:

1. **Manual Status Update:**

   - Go to Sanity Studio
   - Edit the award event
   - Manually set the status

2. **Date Adjustments:**
   - Update event dates in Sanity
   - The system will recalculate automatically

## Technical Details

### Key Files

- `studio-seed-admin/schemaTypes/awardEventType.ts`: Award event schema
- `seed_landingpage/lib/awardUtils.ts`: Date logic and utilities
- `seed_landingpage/services/sanityClient.ts`: Data fetching functions
- `seed_landingpage/components/banner/AwardStatusBanner.tsx`: Status display
- `seed_landingpage/components/Nommines.tsx`: Honoree display

### Date Logic

The system uses May 1st as the cutoff date:

- Before May: Show previous year's awards
- After May: Show current year's awards

This can be adjusted in `getCurrentAwardYear()` function.

### Status Calculation

Status is calculated based on current date vs:

1. Nomination deadline
2. Award announcement date
3. Event date

## Support

For technical support or questions about the dynamic awards system, please refer to the codebase or contact the development team.

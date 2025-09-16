import React from 'react'
import {StringInputProps} from 'sanity'

export function PasswordInput(props: StringInputProps) {
  return (
    <div>
      <input
        type="password"
        value={props.value || ''}
        onChange={(event) => props.onChange(event.target.value)}
        placeholder="Enter password (will be automatically hashed)"
        style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px',
        }}
      />
      <div
        style={{
          fontSize: '12px',
          color: '#666',
          marginTop: '4px',
        }}
      >
        ⚠️ Password will be automatically hashed when saved
      </div>
    </div>
  )
}

import React from 'react';

interface EmailTemplateProps {
  appointmentData: {
    patientName: string;
    email: string;
    phone: string;
    appointmentDate: Date;
    appointmentTime: string;
    duration: string;
    location: string;
    provider: string;
    reason?: string;
    isNewClient: boolean;
    id?: string;
  };
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ appointmentData }) => {
  const appointmentDate = appointmentData.appointmentDate;

  const formattedDate = appointmentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const appointmentTime = appointmentData.appointmentTime;
  const endTime = calculateEndTime(appointmentTime, appointmentData.duration || '30 Minutes');

  // Format date for calendar display
  const calendarDate = appointmentDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
  const calendarDay = appointmentDate.toLocaleDateString('en-US', {
    weekday: 'short'
  });

  function calculateEndTime(startTime: string, duration: string): string {
    const [hours, minutes] = startTime.split(':').map(Number);
    const durationMinutes = parseInt(duration) || 30;

    const endMinutes = minutes + durationMinutes;
    const endHours = hours + Math.floor(endMinutes / 60);
    const finalMinutes = endMinutes % 60;

    const period = endHours >= 12 ? 'PM' : 'AM';
    const displayHours = endHours > 12 ? endHours - 12 : endHours === 0 ? 12 : endHours;

    return `${displayHours}:${finalMinutes.toString().padStart(2, '0')} ${period}`;
  }

  // Convert 24h to 12h format for display
  function formatTime12h(time24: string): string {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  }

  return (
    <div style={{
      fontFamily: 'Google Sans, Roboto, Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(60,64,67,0.3)'
      }}>

        {/* Header */}
        {/* <div style={{
          padding: '24px 32px',
          borderBottom: '1px solid #e8eaed'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#ea4335',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '500',
              fontSize: '16px',
              marginRight: '12px'
            }}>
              M
            </div>
            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#202124',
                marginBottom: '2px'
              }}>
                Tulip Dental NJ
              </div>
              <div style={{
                fontSize: '12px',
                color: '#5f6368'
              }}>
                &lt;maplewood@tulipdentalnj.com&gt;
              </div>
            </div>
          </div>
          <h1 style={{
            fontSize: '22px',
            fontWeight: '400',
            color: '#202124',
            margin: '0',
            lineHeight: '28px'
          }}>
            Dentist Appointment: {appointmentData.location.split(',')[0]}
          </h1>
        </div> */}

        {/* Main Content */}
        <div style={{ display: 'flex' }}>

          {/* Left Content */}
          <div style={{ flex: '1', padding: '32px' }}>
            <p style={{
              fontSize: '14px',
              color: '#202124',
              lineHeight: '20px',
              margin: '0 0 24px 0'
            }}>
              Dear {appointmentData.patientName},
            </p>

            <p style={{
              fontSize: '14px',
              color: '#202124',
              lineHeight: '20px',
              margin: '0 0 16px 0'
            }}>
              You have successfully scheduled your <strong>appointment</strong> on <strong>{formattedDate}</strong> at <strong>{formatTime12h(appointmentTime)} - {endTime}</strong>.
            </p>

            <p style={{
              fontSize: '14px',
              color: '#202124',
              lineHeight: '20px',
              margin: '0 0 32px 0'
            }}>
              <strong>Location:</strong> {appointmentData.location}
            </p>

            {/* Calendar Event Card */}
            <div style={{
              border: '1px solid #dadce0',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '32px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'stretch'
              }}>
                {/* Calendar Icon */}
                <div style={{
                  backgroundColor: '#4285f4',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '80px',
                  color: 'white'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    marginBottom: '4px'
                  }}>
                    {calendarDate.split(' ')[0]}
                  </div>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '400',
                    lineHeight: '1',
                    marginBottom: '4px'
                  }}>
                    {calendarDate.split(' ')[1]}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    opacity: '0.9'
                  }}>
                    {calendarDay}
                  </div>
                </div>

                {/* Event Details */}
                <div style={{
                  padding: '20px',
                  flex: '1'
                }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#202124',
                    margin: '0 0 12px 0',
                    lineHeight: '24px'
                  }}>
                    Appointment at Tulip Dental - New Patient
                  </h3>

                  <div style={{
                    fontSize: '14px',
                    color: '#5f6368',
                    marginBottom: '8px'
                  }}>
                    <strong style={{ color: '#202124' }}>When</strong> {calendarDay} {calendarDate} {appointmentDate.getFullYear()} {formatTime12h(appointmentTime)} – {endTime} (IST)
                  </div>

                  <div style={{
                    fontSize: '14px',
                    color: '#5f6368',
                    marginBottom: '8px'
                  }}>
                    <strong style={{ color: '#202124' }}>Where</strong> {appointmentData.location}
                  </div>

                  <div style={{
                    fontSize: '14px',
                    color: '#5f6368',
                    marginBottom: '16px'
                  }}>
                    <strong style={{ color: '#202124' }}>Who</strong> Unknown Organizer*
                  </div>

                  <a href="#" style={{
                    color: '#1a73e8',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    Add to calendar »
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div style={{
              marginBottom: '32px'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '500',
                color: '#202124',
                margin: '0 0 16px 0'
              }}>
                Booking Details
              </h3>

              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>
                <tbody>
                  <tr>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      fontWeight: '500',
                      padding: '8px 0',
                      width: '120px',
                      verticalAlign: 'top'
                    }}>
                      Booking ID:
                    </td>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      padding: '8px 0'
                    }}>
                      #{appointmentData.id || '23'}
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      fontWeight: '500',
                      padding: '8px 0',
                      verticalAlign: 'top'
                    }}>
                      Name:
                    </td>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      padding: '8px 0'
                    }}>
                      {appointmentData.patientName}
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      fontWeight: '500',
                      padding: '8px 0',
                      verticalAlign: 'top'
                    }}>
                      Email:
                    </td>
                    <td style={{
                      fontSize: '14px',
                      color: '#1a73e8',
                      padding: '8px 0'
                    }}>
                      {appointmentData.email}
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      fontWeight: '500',
                      padding: '8px 0',
                      verticalAlign: 'top'
                    }}>
                      Phone:
                    </td>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      padding: '8px 0'
                    }}>
                      {appointmentData.phone}
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      fontWeight: '500',
                      padding: '8px 0',
                      verticalAlign: 'top'
                    }}>
                      Location:
                    </td>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      padding: '8px 0'
                    }}>
                      {appointmentData.location}
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      fontWeight: '500',
                      padding: '8px 0',
                      verticalAlign: 'top'
                    }}>
                      Appointment:
                    </td>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      padding: '8px 0'
                    }}>
                      {formattedDate} {formatTime12h(appointmentTime)}
                    </td>
                  </tr>
                  <tr>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      fontWeight: '500',
                      padding: '8px 0',
                      verticalAlign: 'top'
                    }}>
                      Duration:
                    </td>
                    <td style={{
                      fontSize: '14px',
                      color: '#202124',
                      padding: '8px 0'
                    }}>
                      {appointmentData.duration || '30 Minutes'}
                    </td>
                  </tr>
                  {appointmentData.reason && (
                    <tr>
                      <td style={{
                        fontSize: '14px',
                        color: '#202124',
                        fontWeight: '500',
                        padding: '8px 0',
                        verticalAlign: 'top'
                      }}>
                        Note:
                      </td>
                      <td style={{
                        fontSize: '14px',
                        color: '#202124',
                        padding: '8px 0'
                      }}>
                        {appointmentData.reason}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <p style={{
              fontSize: '14px',
              color: '#202124',
              lineHeight: '20px',
              margin: '0 0 8px 0'
            }}>
              Thank you for choosing <strong>Tulip Dental NJ</strong>.
            </p>

            <p style={{
              fontSize: '14px',
              color: '#202124',
              lineHeight: '20px',
              margin: '0'
            }}>
              For any inquiries, call us at: <strong>(973) 528-3300</strong>
            </p>
          </div>

          {/* Right Sidebar - Agenda */}
          <div style={{
            width: '280px',
            backgroundColor: '#f8f9fa',
            borderLeft: '1px solid #e8eaed',
            padding: '32px 24px'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '500',
              color: '#202124',
              margin: '0 0 2px 0'
            }}>
              Agenda
            </h3>

            <div style={{
              fontSize: '13px',
              color: '#5f6368',
              marginBottom: '20px'
            }}>
              {calendarDay} {calendarDate} {appointmentDate.getFullYear()}
            </div>

            <div style={{ marginBottom: '12px' }}>
              <div style={{
                fontSize: '13px',
                color: '#5f6368',
                fontStyle: 'italic'
              }}>
                No earlier events
              </div>
            </div>

            <div style={{
              padding: '8px 0',
              borderBottom: '1px solid #e8eaed',
              marginBottom: '8px'
            }}>
              <div style={{
                fontSize: '13px',
                color: '#202124',
                fontWeight: '500'
              }}>
                12:15pm Marketing Catch-up
              </div>
            </div>

            <div style={{
              padding: '8px 0',
              borderBottom: '1px solid #e8eaed',
              marginBottom: '8px'
            }}>
              <div style={{
                fontSize: '13px',
                color: '#202124',
                fontWeight: '500'
              }}>
                7pm nova logo review
              </div>
            </div>

            <div style={{
              padding: '8px 0',
              borderBottom: '1px solid #e8eaed',
              marginBottom: '8px'
            }}>
              <div style={{
                fontSize: '13px',
                color: '#202124',
                fontWeight: '500'
              }}>
                {formatTime12h(appointmentTime)} Appointment at Tulip Dental - New Patient
              </div>
            </div>

            <div style={{ marginTop: '12px' }}>
              <div style={{
                fontSize: '13px',
                color: '#5f6368',
                fontStyle: 'italic'
              }}>
                No later events
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
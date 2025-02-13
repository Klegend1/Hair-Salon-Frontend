+----------------+      +----------------+      +----------------+     +----------------+       +-------------------+
|   HomePage     |      | FeaturedAppointment |   |   Appointment  |     |   AppointmentSearch |  |   AppointmentDetails  |
+----------------+      +----------------+      +----------------+     +----------------+       +-------------------+
| homepage_id    |<--+--| featured_appointment_id|<----| appointment_id |<----| search_id      |       | appointment_details_id|
| title          |      | appointment_id    |     | customer_name   |     | search_term    |       | appointment_id        |
| description    |      | homepage_id       |     | service_id      |     | appointment_id |       | service_duration      |
| created_at     |      | featured_at       |     | stylist_id      |     | stylist_id     |       | appointment_notes     |
| updated_at     |      | reason            |     | appointment_time|     +----------------+       | payment_status       |
+----------------+      +----------------+      | appointment_date|                              +-------------------+
                        |                     | created_at      |                              | customer_feedback  |
                        |                     | updated_at      |                              +-------------------+
                        |
                        v
              F U T U R E   P L A N N I N G
+----------------+       +----------------+     +----------------+     +----------------+  
|   AppointmentList |    |  Service       |     |  Stylist       |     |   AppointmentHistory   |  
+----------------+       +----------------+     +----------------+     +----------------+  
| list_id        |       | service_id     |     | stylist_id     |     | history_id      |  
| homepage_id    |       | name           |     | name           |     | appointment_id  |  
| appointment_id |       | description    |     | specialization  |     | history_notes   |  
| created_at     |       | price          |     | availability   |     | history_date    |  
| updated_at     |       +----------------+     | created_at     |     | status          |  
+----------------+                              | updated_at     |     +----------------+
                                                +----------------+

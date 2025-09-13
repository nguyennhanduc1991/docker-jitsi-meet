FROM jitsi/web:unstable

# Copy custom UI files
COPY rootfs/defaults/ /custom/

# Copy custom UI initialization script
COPY rootfs/etc/cont-init.d/20-custom-ui /etc/cont-init.d/20-custom-ui

# Set permissions
RUN chmod +x /etc/cont-init.d/20-custom-ui

# Expose ports
EXPOSE 80 443
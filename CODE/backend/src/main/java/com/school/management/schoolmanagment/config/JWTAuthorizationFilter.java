package com.school.management.schoolmanagment.config;

import com.school.management.schoolmanagment.service.CustomUserDetailsService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

    private final CustomUserDetailsService userDetailsService;
    private final JWTUtils jwtUtils;

    public JWTAuthorizationFilter(AuthenticationManager authenticationManager, CustomUserDetailsService userDetailsService, JWTUtils jwtUtils) {
        super(authenticationManager);
        this.userDetailsService = userDetailsService;
        this.jwtUtils = jwtUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        String header = request.getHeader("Authorization");

        if (header == null || !header.startsWith("Bearer ")) {
            chain.doFilter(request, response);
            return;
        }

        UsernamePasswordAuthenticationToken authentication = getAuthentication(request);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
        String token = request.getHeader("Authorization").substring(7);

        if (token != null) {
            String userEmail = jwtUtils.extractUsername(token);
            if (userEmail != null) {
                UserDetails userDetails = userDetailsService.loadUserByUsername(userEmail);
                if (jwtUtils.validateToken(token, userDetails)) {
                    return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                }
            }
        }
        return null;
    }
}

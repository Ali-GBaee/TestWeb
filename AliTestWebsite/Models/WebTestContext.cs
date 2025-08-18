using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AliTestWebsite.Models;

public partial class WebTestContext : DbContext
{
    public WebTestContext()
    {
    }

    public WebTestContext(DbContextOptions<WebTestContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Login> Logins { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=ALI\\ALINEWSQL;Database=WebTest;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.UserName);

            entity.ToTable("Login");

            entity.Property(e => e.UserName).HasMaxLength(10);
            entity.Property(e => e.Password)
                .HasMaxLength(11)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

using Microsoft.EntityFrameworkCore;

public class MoviesListContext : DbContext
{
    public MoviesListContext(DbContextOptions<MoviesListContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
}
